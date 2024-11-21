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
var mergeTwoLists = function (l1, l2) {
    //var mergedHead = { val : -1, next : null },
    //    crt = mergedHead;

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