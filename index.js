//Activtiy list Task/


// Define Activity function
function Activity(amount) {
    this.amount = amount;
}

// Add methods to Activity prototype
Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
        return false;
    } else {
        this.amount = value;
        return true;
    }
};

Activity.prototype.getAmount = function() {
    return this.amount;
};

// Define Payment function
function Payment(amount, receiver) {
    Activity.call(this, amount);
    this.receiver = receiver;
}

// Inherit from Activity
Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

// Add methods to Payment prototype
Payment.prototype.setReceiver = function(receiver) {
    this.receiver = receiver;
};

Payment.prototype.getReceiver = function() {
    return this.receiver;
};

// Define Refund function
function Refund(amount, sender) {
    Activity.call(this, amount);
    this.sender = sender;
}

// Inherit from Activity
Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Refund;

// Add methods to Refund prototype
Refund.prototype.setSender = function(sender) {
    this.sender = sender;
};

Refund.prototype.getSender = function() {
    return this.sender;
};


//Employee Inheritance

// Define Employee function
function Employee(title) {
    this.title = title;
}

// Add methods to Employee prototype
Employee.prototype.setTitle = function(title) {
    this.title = title;
};

Employee.prototype.getTitle = function() {
    return this.title;
};

// Define Engineer function
function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
}

// Inherit from Employee
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer;

// Add methods to Engineer prototype
Engineer.prototype.setIsManager = function(isManager) {
    this.isManager = isManager;
};

Engineer.prototype.getIsManager = function() {
    return this.isManager;
};