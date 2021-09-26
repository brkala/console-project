import treeData from "@/assets/data/json/content.json";
export default {
    state: () => ({
        tree: treeData,
        current: null,
        prev: null,
        next: null,
    }),
    mutations: {
        setCurrent(state, payload) {
            const goDeeper = (search, tree, level = 0, fallbackPrev = null, fallbackNext = null) => {
                if (!search) {
                    return null;
                }
                for (let index = 0; index < tree.length; index++) {
                    const elem = tree[index];
                    let prev = index - 1 >= 0 ? tree[index - 1] : level == 0 ? tree[tree.length - 1] : fallbackPrev;
                    let next = index + 1 < tree.length ? tree[index + 1] : level == 0 ? tree[0] : fallbackNext;
                    if (prev?.children?.length) {
                        prev = prev.children[prev.children.length - 1];
                    }
                    if (next?.children?.length) {
                        next = next.children[0];
                    }
                    if (elem == payload) {
                        return {
                            prev,
                            current: elem,
                            next,
                        }
                    }
                    else if (elem?.children?.length) {
                        return goDeeper(search, elem.children, level + 1, prev, next);
                    }

                }
            }
            const result = goDeeper(state.payload, state.tree);
            if (result) {
                if (result.prev && !result.prev.children?.length) {
                    state.prev = result.prev;
                }
                state.current = result.current;
                if (result.next && !result.prev.children?.length) {
                    state.prev = result.next;
                }

            }
            else {
                state.current = null;
                state.prev = null;
                state.next = null;
            }
        }
    },

    getters: {
        getTree: (state) => state.tree,
        getCurrent: (state) => state.current,
        getPrev: (state) => state.prev,
        getNext: (state) => state.next,
    }
}