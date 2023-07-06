import { updateBackpackInfo } from "./util.js";

export default {
    name: "Classic Backpack",
    volume: 15,
    color: "Grey",
    pocketNum: 5,
    isLidOpen: false,
    strapLength: {
        left: 26,
        right: 26,
    },
    setStrapLength: function (left, right) {
        this.strapLength.left = left;
        this.strapLength.right = right;
        updateBackpackInfo(this, "Strap Length updated.");
    },
    toggleLid: function (lidStatus) {
        this.isLidOpen = lidStatus;
        updateBackpackInfo(this, "Lid status updated");
    },
};
