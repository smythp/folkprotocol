/**
 * Remark plugin to add anchor links to citations
 *
 * Transforms:
 * - [1] in text → [1](#ref-1)
 * - [1] at start of reference line → <span id="ref-1">[1]</span>
 *
 * This allows citations to be clickable and jump to the reference section.
 */

export default function remarkCitations() {
  return (tree) => {
    // Track if we're in the References section
    let inReferences = false;

    // Recursive visit function - processes tree in place
    function visit(node, parent) {
      // Detect References heading
      if (node.type === 'heading' && node.depth === 2) {
        const headingText = node.children
          .filter(child => child.type === 'text')
          .map(child => child.value)
          .join('');

        if (headingText.trim() === 'References') {
          inReferences = true;
        } else {
          inReferences = false;
        }
      }

      // Process paragraphs in the References section
      if (inReferences && node.type === 'paragraph' && node.children && node.children.length > 0) {
        const firstChild = node.children[0];
        if (firstChild.type === 'text') {
          const refMatch = firstChild.value.match(/^\[(\d+)\]/);
          if (refMatch) {
            const citationNum = refMatch[1];
            // Replace first text node with HTML anchor
            firstChild.type = 'html';
            firstChild.value = firstChild.value.replace(
              /^\[(\d+)\]/,
              `<span id="ref-$1">[$1]</span>`
            );
          }
        }
      }

      // Process paragraphs in body text (not in References)
      if (!inReferences && node.type === 'paragraph' && node.children) {
        // Collect indices of text nodes that need processing
        const nodesToProcess = [];

        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (child.type === 'text') {
            const citationPattern = /\[(\d+(?:,\d+)*)\]/g;
            if (citationPattern.test(child.value)) {
              nodesToProcess.push(i);
            }
          }
        }

        // Process in reverse order so indices remain valid
        for (let i = nodesToProcess.length - 1; i >= 0; i--) {
          const nodeIndex = nodesToProcess[i];
          const textNode = node.children[nodeIndex];
          const text = textNode.value;

          const parts = [];
          let lastIndex = 0;
          let match;
          const citationPattern = /\[(\d+(?:,\d+)*)\]/g;

          while ((match = citationPattern.exec(text)) !== null) {
            const fullMatch = match[0];
            const numbers = match[1];
            const startIndex = match.index;

            // Add text before citation
            if (startIndex > lastIndex) {
              parts.push({
                type: 'text',
                value: text.slice(lastIndex, startIndex)
              });
            }

            // Process multiple citations like [1,2,3]
            const nums = numbers.split(',').map(n => n.trim());

            if (nums.length === 1) {
              // Single citation: make it a link
              parts.push({
                type: 'link',
                url: `#ref-${nums[0]}`,
                children: [{ type: 'text', value: fullMatch }]
              });
            } else {
              // Multiple citations: create individual links separated by commas
              parts.push({ type: 'text', value: '[' });
              nums.forEach((num, j) => {
                parts.push({
                  type: 'link',
                  url: `#ref-${num}`,
                  children: [{ type: 'text', value: num }]
                });
                if (j < nums.length - 1) {
                  parts.push({ type: 'text', value: ',' });
                }
              });
              parts.push({ type: 'text', value: ']' });
            }

            lastIndex = startIndex + fullMatch.length;
          }

          // Add remaining text
          if (lastIndex < text.length) {
            parts.push({
              type: 'text',
              value: text.slice(lastIndex)
            });
          }

          // Replace the text node with the parts
          node.children.splice(nodeIndex, 1, ...parts);
        }
      }

      // Recursively visit children (but not paragraph children we just processed)
      if (node.children && node.type !== 'paragraph') {
        for (let i = 0; i < node.children.length; i++) {
          visit(node.children[i], node);
        }
      }
    }

    visit(tree, null);
  };
}
