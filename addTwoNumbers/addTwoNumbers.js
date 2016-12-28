/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
		var res=null ,node =null;
		var carry = 0;	
		var reminder = 0;	
		var sum = 0;	
		var ln1 = l1, ln2 = l2;
		res = node = new ListNode(0);
	
		while(ln1 !== null || ln2 !== null || carry !== 0) {
			sum = (ln1?ln1.val:0) + (ln2?ln2.val:0) + carry;
			carry = Math.floor(sum / 10);
			remainder = sum % 10;
			node = node.next = new ListNode(remainder);
			ln1 = ln1?ln1.next:null;
    	ln2 = ln2?ln2.next:null;
		}
	
		return res.next;
};