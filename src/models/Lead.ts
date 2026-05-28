import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILead extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  address: {
    street?: string;
    city?: string;
    state: string;
    zip?: string;
  };
  serviceType: string;
  urgency: string;
  mode?: string;
  notes?: string;
  smsOptIn: boolean;
  smsOptInTimestamp?: Date;
  palmettoId?: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true, index: true },
    email: { type: String },
    address: {
      street: String,
      city: String,
      state: { type: String, default: 'Utah' },
      zip: String,
    },
    serviceType: { type: String, required: true },
    urgency: { type: String, required: true },
    mode: String,
    notes: String,
    smsOptIn: { type: Boolean, required: true, default: false },
    smsOptInTimestamp: { type: Date },
    palmettoId: String,
    source: { type: String, default: 'website' },
  },
  {
    timestamps: true,
  }
);

// Create compound index for deduplication
LeadSchema.index({ phone: 1, email: 1 });

// Prevent model recompilation in development
const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);

export default Lead;
