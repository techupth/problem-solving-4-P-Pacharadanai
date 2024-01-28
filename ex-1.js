function pivotIndex(nums) {
    const pivotNum = nums.find((_, index) => {
        const sumLeft = nums
            .slice(0, index)
            .reduce((sum, leftNum) => (sum += leftNum), 0);
        const sumRight = nums
            .slice(index + 1)
            .reduce((sum, leftNum) => (sum += leftNum), 0);
        return sumLeft === sumRight;
    });

    return nums.indexOf(pivotNum);
}
