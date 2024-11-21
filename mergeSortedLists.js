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
    var mergedHead = new LinkedList(), crt = mergedHead;
    while (l1.head && l2.head) {
        if (l1.head.val > l2.head.val) {
            crt.add(l2.head.val);
            l2.head = l2.head.next;
        }
        else {
            crt.add(l1.head.val);
            l1.head = l1.head.next;
        }
    }
    return mergedHead;
};
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.addArray = function (list) {
        for (var i = 0; i < list.length; i++) {
            this.add(list[i]);
        }
    };
    LinkedList.prototype.add = function (value) {
        var newNode = new ListNode(value, null);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    LinkedList.prototype.toConsole = function () {
        var node = this.head;
        while (node != null) {
            console.log("val: " + node.val);
            node = node.next;
        }
    };
    return LinkedList;
}());
var list1 = [1, 2, 4], list2 = [1, 3, 4];
var linkedList1 = new LinkedList();
linkedList1.addArray(list1);
var linkedList2 = new LinkedList();
linkedList2.addArray(list2);
console.log('linkedList1');
linkedList1.toConsole();
console.log('linkedList2');
linkedList2.toConsole();
var mergedList = mergeTwoLists(linkedList1, linkedList2);
console.log('mergedList');
mergedList.toConsole();
