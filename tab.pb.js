/// <reference path="../pb_data/types.d.ts" />

cronAdd('tabs_clear', '*/5 * * * *', () => {
  const dayAgo = new Date(new Date().setHours(new Date().getHours() - 24))
  const dayAgoStr = dayAgo.toISOString().replace('T', ' ')
  const tabs = $app.findRecordsByFilter('tabs', `updated < '${dayAgoStr}'`)

  tabs.forEach(tab => $app.delete(tab))
})
