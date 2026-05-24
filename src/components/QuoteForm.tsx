'use client';

import { useState, useEffect, useRef } from 'react';

const serviceTypes = [
  'AC Not Cooling',
  'Furnace Not Heating',
  'Strange Noises',
  'High Energy Bills',
  'New Installation',
  'Routine Maintenance',
  'Emergency Service',
  'Other',
];

type Step = 1 | 2 | 3;

declare global {
  interface Window {
    google: any;
    initGooglePlaces: () => void;
  }
}

export default function QuoteForm() {
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);

  const [form, setForm] = useState({
    serviceType: '',
    urgency: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    zip: '',
    state: 'Utah',
    notes: '',
  });

  const set = (key: string, value: string) => setForm(f => ({ ...f, [key]: value }));

  console.log(`Maps Key: ${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
    
  }`)
  useEffect(() => {
    if (document.getElementById('google-places-script')) return;
    const script = document.createElement('script');
    script.id = 'google-places-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places&callback=initGooglePlaces`;
    script.async = true;
    script.defer = true;
    window.initGooglePlaces = () => {
      if (addressInputRef.current) initAutocomplete();
    };
    document.head.appendChild(script);
  }, []);

  // Init autocomplete when step 3 is reached
  useEffect(() => {
    if (step === 3 && window.google && addressInputRef.current) {
      initAutocomplete();
    }
  }, [step]);

  const initAutocomplete = () => {
    if (!addressInputRef.current || autocompleteRef.current) return;
    autocompleteRef.current = new window.google.maps.places.Autocomplete(addressInputRef.current, {
      componentRestrictions: { country: 'us' },
      fields: ['address_components'],
      types: ['address'],
      bounds: new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(41.0, -112.5), // Northern Utah bounds
        new window.google.maps.LatLng(42.5, -111.0)
      ),
    });

    autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current.getPlace();
      if (!place.address_components) return;

      let street = '';
      let streetNumber = '';
      let city = '';
      let zip = '';
      let state = 'Utah';

      for (const component of place.address_components) {
        const types = component.types;
        if (types.includes('street_number')) streetNumber = component.long_name;
        if (types.includes('route')) street = component.long_name;
        if (types.includes('locality')) city = component.long_name;
        if (types.includes('postal_code')) zip = component.long_name;
        if (types.includes('administrative_area_level_1')) state = component.long_name;
      }

      setForm(f => ({
        ...f,
        street: streetNumber ? `${streetNumber} ${street}` : street,
        city,
        zip,
        state,
      }));
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please call us directly at (801) 555-0100.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-xl mx-auto bg-white/5 border border-[#e85d26]/30 rounded-3xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#e85d26]/20 flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
        <h3 className="text-2xl font-black mb-2">Request Received!</h3>
        <p className="text-white/60">A local HVAC specialist will contact you within 30 minutes. Check your phone for a confirmation text.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8 justify-center">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              s <= step ? 'bg-[#e85d26] text-white' : 'bg-white/10 text-white/30'
            }`}>{s}</div>
            {s < 3 && <div className={`w-12 h-0.5 transition-all ${s < step ? 'bg-[#e85d26]' : 'bg-white/10'}`} />}
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

        {/* Step 1 - Issue */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold mb-1">What's the issue?</h3>
            <p className="text-white/40 text-sm mb-6">Select the service you need</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {serviceTypes.map((s) => (
                <button
                  key={s}
                  onClick={() => set('serviceType', s)}
                  className={`p-3 rounded-xl border text-sm font-medium text-left transition-all ${
                    form.serviceType === s
                      ? 'border-[#e85d26] bg-[#e85d26]/10 text-white'
                      : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="mb-6">
              <label className="block text-sm text-white/50 mb-2">Urgency</label>
              <div className="grid grid-cols-3 gap-3">
                {['Emergency', 'This Week', 'Planning Ahead'].map((u) => (
                  <button
                    key={u}
                    onClick={() => set('urgency', u)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                      form.urgency === u
                        ? 'border-[#e85d26] bg-[#e85d26]/10 text-white'
                        : 'border-white/10 bg-white/5 text-white/60 hover:text-white'
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!form.serviceType || !form.urgency}
              className="w-full bg-[#e85d26] disabled:opacity-30 hover:bg-[#d04e1a] text-white font-bold py-4 rounded-2xl transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2 - Contact */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold mb-1">Your contact info</h3>
            <p className="text-white/40 text-sm mb-6">So we can connect you with a local pro</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-white/40 mb-1.5">First Name *</label>
                <input
                  value={form.firstName}
                  onChange={e => set('firstName', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 mb-1.5">Last Name *</label>
                <input
                  value={form.lastName}
                  onChange={e => set('lastName', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs text-white/40 mb-1.5">Phone *</label>
              <input
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20"
                placeholder="(801) 555-0100"
                type="tel"
              />
            </div>
            <div className="mb-6">
              <label className="block text-xs text-white/40 mb-1.5">Email</label>
              <input
                value={form.email}
                onChange={e => set('email', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20"
                placeholder="john@email.com"
                type="email"
              />
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 border border-white/10 text-white/60 hover:text-white font-medium py-4 rounded-2xl transition-colors text-sm">
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!form.firstName || !form.lastName || !form.phone}
                className="flex-[2] bg-[#e85d26] disabled:opacity-30 hover:bg-[#d04e1a] text-white font-bold py-4 rounded-2xl transition-colors"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 - Address */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-bold mb-1">Your address</h3>
            <p className="text-white/40 text-sm mb-6">Start typing and select your address from the dropdown</p>
            <div className="mb-4">
              <label className="block text-xs text-white/40 mb-1.5">Street Address</label>
              <input
                ref={addressInputRef}
                defaultValue={form.street}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20"
                placeholder="Start typing your address..."
              />
            </div>
            {/* Show parsed fields after autocomplete fills them */}
            {(form.city || form.zip) && (
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">City</label>
                  <input
                    value={form.city}
                    onChange={e => set('city', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5">Zip Code</label>
                  <input
                    value={form.zip}
                    onChange={e => set('zip', e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50"
                    maxLength={5}
                  />
                </div>
              </div>
            )}
            <div className="mb-6">
              <label className="block text-xs text-white/40 mb-1.5">Additional Notes</label>
              <textarea
                value={form.notes}
                onChange={e => set('notes', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d26]/50 placeholder-white/20 resize-none"
                placeholder="Describe the issue in more detail..."
                rows={3}
              />
            </div>
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="flex-1 border border-white/10 text-white/60 hover:text-white font-medium py-4 rounded-2xl transition-colors text-sm">
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-[2] bg-[#e85d26] disabled:opacity-50 hover:bg-[#d04e1a] text-white font-bold py-4 rounded-2xl transition-colors"
              >
                {loading ? 'Submitting...' : 'Get My Free Quote →'}
              </button>
            </div>
            <p className="text-center text-white/20 text-xs mt-4">No spam. A contractor will call within 30 minutes.</p>
          </div>
        )}
      </div>
    </div>
  );
}