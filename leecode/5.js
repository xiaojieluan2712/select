/*
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;
   var i = 0;
   for(var j=1;j<nums.length;j++) {
       if(nums[j] != nums[i]) i++;
       nums[i] = nums[j];
   }
    return i+1;
};
//var nums = [1,1,2];
var nums = [0,0,1,1,1,2,2,3,3,4];
var res = removeDuplicates(nums);
console.log(res);
