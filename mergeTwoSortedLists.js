/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/
class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;

    while(list1 && list2){
        if(list1.val <= list2.val){
            current.next = list1;
            list1 = list1.next;
        }else{
            current.next = list2;
            list2 = list2.next
        }
        current = current.next
    }

    current.next = list1 || list2;

    return dummy.next

};
