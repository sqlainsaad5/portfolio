import mongoose, { Schema } from "mongoose"

export type FeedbackDoc = {
  name: string
  rating: number
  message: string
  project: string
  createdAt?: Date
}

const feedbackSchema = new Schema<FeedbackDoc>(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    message: { type: String, required: true },
    project: { type: String, default: "General / Portfolio" },
  },
  { timestamps: true },
)

export const FeedbackModel =
  mongoose.models.Feedback ?? mongoose.model<FeedbackDoc>("Feedback", feedbackSchema)
