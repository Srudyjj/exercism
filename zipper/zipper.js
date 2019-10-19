function Zipper() {
  this._tree = {};
};

// For example given a rose tree (where each node contains a value and a list of child nodes) a zipper might support these operations:


// get a zipper out of a rose tree, the focus is on the root node
Zipper.fromTree = function (tree) {
  return this._tree = tree
};

// get the rose tree out of the zipper
Zipper.prototipe.to_tree = function () { };function Zipper() {
  this._tree = {};
};

// For example given a rose tree (where each node contains a value and a list of child nodes) a zipper might support these operations:


// get a zipper out of a rose tree, the focus is on the root node
Zipper.fromTree = function (tree) {
  return this._tree = tree
};

// get the rose tree out of the zipper
Zipper.prototype.to_tree = function () { };

// get the value of the focus node
Zipper.prototype.value = function () { };

// move the focus to the previous child of the same parent, returns a new zipper
Zipper.prototype.left = function () { };

// move the focus to the next child of the same parent, returns a new zipper
Zipper.prototype.right = function () { };

// move the focus to the parent, returns a new zipper
Zipper.prototype.up = function () { };

// set the value of the focus node, returns a new zipper
Zipper.prototype.setValue = function (value) { };

// insert a new subtree before the focus node, it becomes the prev of the focus node, returns a new zipper
Zipper.prototype.setLeft = function (value) { };

// insert a new subtree after the focus node, it becomes the next of the focus node, returns a new zipper
Zipper.prototype.setRight = function (value) { };

// removes the focus node and all subtrees, focus moves to the next node if possible otherwise to the prev node if possible, otherwise to the parent node, returns a new zipper
Zipper.prototype.delete = function () { };


// get the value of the focus node
Zipper.prototipe.value = function () { };

// move the focus to the previous child of the same parent, returns a new zipper
Zipper.prototipe.left = function () { };

// move the focus to the next child of the same parent, returns a new zipper
Zipper.prototipe.right = function () { };

// move the focus to the parent, returns a new zipper
Zipper.prototipe.up = function () { };

// set the value of the focus node, returns a new zipper
Zipper.prototipe.setValue = function (value) { };

// insert a new subtree before the focus node, it becomes the prev of the focus node, returns a new zipper
Zipper.prototipe.setLeft = function (value) { };

// insert a new subtree after the focus node, it becomes the next of the focus node, returns a new zipper
Zipper.prototipe.setRight = function (value) { };

// removes the focus node and all subtrees, focus moves to the next node if possible otherwise to the prev node if possible, otherwise to the parent node, returns a new zipper
Zipper.prototipe.delete = function () { };
