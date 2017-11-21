import { Map, List } from 'immutable';

const familyTree = fromJS([
    {
        id: 'sally',
        children: []
    },
    {
        id: 'may',
        children: []
    },
    {
        id: 'grandfatherBob',
        children: [{ id: 'bob' }]
    },
    {
        id: 'bob',
        children: [{ id: 'sally' }, { id: 'bob2' }, { id: 'bob3' }]
    },
    {
        id: 'motherJudith',
        children: [{ id: 'yi' }, { id: 'may' }]

    },
    {
        id: 'bob2',
        children: []

    },
    {
        id: 'yi',
        children: []
    },
]);

function createHierarchy(listOfNodes = List()) {

    let nonRoots = Map();

    const nodesById = listOfNodes.reduce((acc, curr) => {
        nonRoots = curr.get('children').reduce(
            (workingMap, child) =>
                workingMap.set(child.get('id'), true), nonRoots);

        return acc.set(curr.get('id'), curr);
    }, Map());

    const reduceNode = (acc, child) => {
        const node = nodesById.get(child.get('id'));

        if (!node) return acc;

        acc = acc.push(node);

        return node.get('children', List()).reduce(reduceNode, acc);
    };

    const hierarchyList = listOfNodes.reduce((acc, curr) => {
        if (nonRoots.get(curr.get('id'))) return acc;

        return reduceNode(acc, curr);
    }, List());

    return hierarchyList;
}