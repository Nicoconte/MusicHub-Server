const RESPONSE_MESSAGE = {
    "UNEXPECTED_ERROR": "An unexpected error ocurred during the process",
    "INCOMPLETE_BODY": "Invalid fields.",
    "ALREADY_EXISTS": "The user already exists with that username. Try another one.",
    "USER_DOES_NOT_EXIST": "User does not exist. Create one",
    "UNAUTHORIZED": "Unauthorized user",
    "INVALID_TOKEN": "Invalid token",
    "PROPERTY_REQUIRE": (prop) => `Property .${prop} was required`,
    "CANNOT_CREATE": (object) => `Cannot create the object ${object}`,
    "INVALID_BODY": "Body cannot be null",
    "PASSWORD_DOES_NOT_MATCH": "Password doesn't match. Try again",
    "NOT_ENOUGH_SPACE": "There is no space left in the room",
    "USER_ADDED": (userId) => `User with ID ${userId} was added`,
    "USER_ALREADY_EXIST_IN_THE_ROOM": "You already are a member of the room!",
    "ROOM_DOES_NOT_EXIST": "Room does not exist. Create one",
    "CANNOT_DELETE": "Cannot delete",
    "CANNOT_UPDATE": "Cannot update"
}

module.exports = RESPONSE_MESSAGE;

