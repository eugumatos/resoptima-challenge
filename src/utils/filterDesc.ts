export function filterDesc(desc: string) {
  if (desc.length < 100) {
    return desc;
  }

  return `${desc.substring(0, 100)}...`;
}
