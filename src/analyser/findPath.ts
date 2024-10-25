import { findNode, type Node } from 'obj-walker'
import type { Hierarchy } from './types'

/** Transforma um Node do obj-walker em um array de caminhos.
*/
const turnNodeIntoPath = (node: Node | undefined, target: string): string[] => {
    if(!node) return []
    if(!node.isLeaf) return node.path
    
    // replaces last item if leaf is part of an array
    const array = [...node.path]
    array.pop()
    array.push(target)

    // Todo: cover case when leaf is not an array

    return array
}

export const findPath = (hierarchy: Hierarchy, target: string): string[] => {
    const foundNode = findNode(hierarchy, (node) =>
        node.val === target ||
        node.key === target
    )

    return turnNodeIntoPath(foundNode, target)
};