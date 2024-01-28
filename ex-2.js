function defangIPaddr(nums) {
    const newAddress = nums
        .split(".")
        .map((item, index) => {
            if (index !== 0) {
                return "[.]" + item;
            } else {
                return item;
            }
        })
        .join("");

    return newAddress;
}
