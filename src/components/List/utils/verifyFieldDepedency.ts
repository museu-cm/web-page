export default function verifyFieldDepedency(field: unknown): boolean {
  if (field === undefined) {
    return true;
  }

  if (typeof field === "string" && field === "") {
    return true;
  }

  if (typeof field === "number" && field === 0) {
    return true;
  }

  if (typeof field === "object" && field === null) {
    return true;
  }

  if (Array.isArray(field) && field.length === 0) {
    return true;
  }

  return false;
}
