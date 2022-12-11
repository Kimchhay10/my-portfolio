---
to: src/components/<%= name  %>/index.tsx
---

import React from 'react'

interface <%= Name %>Props {}

const <%= Name %>: React.FC<<%= Name %>Props> = () => {
  return <div className="w-[100px] h-[100px] bg-red-500" />
}

export default <%= Name %>
