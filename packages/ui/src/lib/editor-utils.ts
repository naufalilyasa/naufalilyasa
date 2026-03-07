export const listParser = (block: any) => {
    const { data } = block;
    const style = data.style === "ordered" ? "ol" : "ul";

    const renderItems = (items: any[]): string => {
        if (!items || !Array.isArray(items)) return "";

        return items
            .map((item: any) => {
                // Handle both old (string) and new ({content, items}) formats
                const content = typeof item === "string" ? item : item.content;
                const nestedItems =
                    item.items && item.items.length > 0
                        ? `<${style}>${renderItems(item.items)}</${style}>`
                        : "";
                return `<li>${content}${nestedItems}</li>`;
            })
            .join("");
    };

    return `<${style}>${renderItems(data.items)}</${style}>`;
};

/**
 * Normalizes EditorJS data to be compatible with @editorjs/list 2.x
 * which expects items to be objects { content: string, items: [] }
 */
export function normalizeEditorData(data: any) {
    if (!data || !data.blocks || !Array.isArray(data.blocks)) return data;

    const normalizeItems = (items: any[]): any[] => {
        if (!items || !Array.isArray(items)) return [];

        return items.map((item: any) => {
            if (typeof item === "string") {
                return { content: item, items: [] };
            }
            return {
                content: item.content || "",
                items: normalizeItems(item.items || []),
            };
        });
    };

    const normalizedBlocks = data.blocks.map((block: any) => {
        if (block.type === "list" && block.data && block.data.items) {
            return {
                ...block,
                data: {
                    ...block.data,
                    items: normalizeItems(block.data.items),
                },
            };
        }
        return block;
    });

    return { ...data, blocks: normalizedBlocks };
}
