# Citation System

## Overview

The Folk Protocol site uses an automated citation linking system that makes references clickable and allows readers to jump directly from citations in the text to the full reference information.

## How It Works

The citation system uses a **remark plugin** (`plugins/remark-citations.mjs`) that processes markdown during the build phase. This means:

- No changes needed to the markdown syntax
- No client-side JavaScript required
- Works automatically during `npm run build`
- Static, fast, accessible

## Citation Format

### In Protocol/Materia Content

Use standard academic citation format with square brackets and numbers:

```markdown
Honey reduces cough frequency [1]. Multiple studies confirm this [1,2,3].
```

**Single citations:**
- `[1]` → becomes a clickable link to `#ref-1`

**Multiple citations:**
- `[1,2,3]` → becomes `[1,2,3]` where each number is individually clickable

### In References Section

Add a level-2 heading titled "References" followed by numbered reference entries:

```markdown
## References

[1] AuthorName. Title of Study. Journal. Year;Volume:Pages. [[link-if-available]]

[2] AuthorName. Another Study. Journal. Year.

[3] Author et al. Third Study. Publisher, Year. https://example.com
```

**Important:**
- Each reference MUST start with `[N]` where N is the citation number
- The `[N]` must be at the beginning of the line
- Numbers should be sequential (1, 2, 3, etc.)

## What Happens During Build

The remark plugin:

1. **Detects the References section** by finding the `## References` heading
2. **In body text**: Converts `[1]` to `<a href="#ref-1">[1]</a>`
3. **In references**: Converts `[1]` to `<span id="ref-1">[1]</span>`

This creates bidirectional linking: click a citation to jump to its reference.

## Examples

### Basic Protocol with Citations

```markdown
---
title: "Example Protocol"
summary: "A test protocol"
researchDepth: moderate
draft: false
---

## Overview

This herb is effective for sleep [1,2]. Safety is well-established [3].

## Core Protocol

Use 2-3ml tincture before bed [1]. Avoid if pregnant [3].

## References

[1] Smith J, et al. Randomized trial of herb. J Medicine. 2020;45(2):123-130.

[2] Jones A. Meta-analysis of herb studies. Review Journal. 2021;12:45-67.

[3] SafetyBoard. Herb safety profile. FDA Database. 2019. https://example.com
```

### Citations with Links to Research Summaries

The brief mentioned linking to research summaries like `/research/studies/honey_cochrane_2018`. Currently, these would be added as wiki-style links after the reference:

```markdown
[1] Author. Study Title. Journal. 2020. [[research/studies/study-slug]]
```

**Note:** The `[[...]]` wiki-links are not currently processed. To implement this:
- Create `src/content/studies/` collection
- Add a remark plugin to convert `[[research/studies/slug]]` to markdown links
- Or manually write as: `[Full Summary](/research/studies/slug)`

## Configuration

The plugin is configured in `astro.config.mjs`:

```javascript
import remarkCitations from './plugins/remark-citations.mjs';

export default defineConfig({
  // ...
  markdown: {
    remarkPlugins: [remarkCitations],
  },
});
```

## Testing

After making changes:

```bash
npm run build
```

Check the generated HTML in `dist/protocols/[protocol-name]/index.html`:

- Citations should be `<a href="#ref-N">[N]</a>`
- References should have `<span id="ref-N">[N]</span>`

## Troubleshooting

### Citations Not Linking

- Ensure `## References` heading exists (exact match, level 2)
- Check citation format: `[1]` not `[ref1]` or other variants
- Verify reference entries start with `[N]` at beginning of line

### Duplicate Links

If you see `<a href="#ref-1"></a><a href="#ref-1">[1]</a>` in output, this is a known cosmetic issue where markdown/markdoc creates an empty anchor for reference-style links. The citations still work correctly. The empty anchor is harmless and doesn't affect functionality.

### Build Errors

If the build fails:
- Check that all citations have matching reference entries
- Verify frontmatter schema matches (especially `related` field should be array of strings, not wiki-links)

## Future Enhancements

From brief-20251229-a33v, possible additions:

1. **Hover preview cards**: Show citation details on hover without jumping
   - Would require client-side JS
   - Could use `title` attributes as lightweight alternative

2. **Research summary links**: Auto-link references to `/research/studies/` pages
   - Needs studies collection in content config
   - Remark plugin to process `[[research/studies/slug]]` syntax

3. **Back-references**: Add "↩" links from references back to citations
   - Would need to track all citation locations during build

4. **Citation validation**: Warn if citation numbers are missing references
   - Could be a separate remark plugin or build-time check
