export const SEGMENTS = ["boliches", "productores", "casual"];

const SEGMENT_BY_ORGANIZER = {
  boliche: "boliches",
  productor: "productores",
  otro: "casual",
};

export function computeSegment(answers) {
  if (!answers) {
    throw new Error("answers is required");
  }
  return SEGMENT_BY_ORGANIZER[answers.organizerType] || "casual";
}
