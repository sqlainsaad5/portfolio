/** Extract YouTube video id from common URL shapes for embeds. */
export function getYoutubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})/)
  return m?.[1] ?? null
}
