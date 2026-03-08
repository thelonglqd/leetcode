function twoSum(nums: number[], target: number): number[] {
    const tmp = {};

    for (let i = 0; i < nums.length; i++) {
        if (tmp[nums[i]] != null) {
            return [tmp[nums[i]], i]
        } else {
            tmp[target - nums[i]] = i
        }
    }
};