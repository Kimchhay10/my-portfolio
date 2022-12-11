---
to: src/components/index.tsx
inject: true
skip_if: <%= name %>
after: "// All Components"
---
export { default as <%= Name %> } from './<%= name %>'