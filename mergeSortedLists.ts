/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 * @return {LinkedList}
 */
var mergeTwoLists = function (p_l1, p_l2) {
    let l1 = p_l1, l2 = p_l2;

    let mergedHead = new LinkedList(),
        crt = mergedHead;

    while (l1.head && l2.head) {
        if (l1.head.val > l2.head.val) {
            crt.add(l2.head.val);
            l2.head = l2.head.next;
        } else {
            crt.add(l1.head.val);
            l1.head = l1.head.next;
        }
    }

    return mergedHead;
};

var mergeTwoListsTry2 = function (p_node1, p_node2) {
    let node1 = p_node1, node2 = p_node2;
    let tempNode = new ListNode(-1, null),
        crt = tempNode;

    while (node1 && node2) {
        if (node1.val > node2.val) {
            crt.next = node2;
            node2 = node2.next;
        } else {
            crt.next = node1;
            node1 = node1.next;
        }
        crt = crt.next;
    }

    return tempNode.next;
};

class ListNode {
    val: any;
    next: any;

    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class LinkedList {
    head: any;

    addArray(list: Array<number>) {
        for (let i = 0; i < list.length; i++) {
            this.add(list[i]);
        }
    }

    add(value: number) {
        const newNode = new ListNode(value, null);
        if (!this.head) {
            this.head = newNode;
            return;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
    }

    toConsole() {
        let node = this.head;
        while (node != null) {
            console.log(`val: ${node.val}`);
            node = node.next;
        }
    }
}

const list1 = [1, 2, 4],
    list2 = [1, 3, 4];

let linkedList1 = new LinkedList();
linkedList1.addArray(list1);
let linkedList2 = new LinkedList();
linkedList2.addArray(list2);

console.log('linkedList1');
linkedList1.toConsole();

console.log('linkedList2');
linkedList2.toConsole();

const mergedList = mergeTwoLists(linkedList1, linkedList2);
console.log('mergedList');
mergedList.toConsole();

linkedList1 = new LinkedList();
linkedList1.addArray(list1);
linkedList2 = new LinkedList();
linkedList2.addArray(list2);
let mergedList2 = mergeTwoListsTry2(linkedList1.head, linkedList2.head);

console.log('mergedList2');
console.log(mergedList2);
while (mergedList2) {
    console.log(mergedList2.val);
    mergedList2 = mergedList2.next;
}
