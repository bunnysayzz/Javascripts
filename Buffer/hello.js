// Create two buffers named "hello" and "world"
const hello = Buffer.from('hello');
const world = Buffer.from('world');

// Concatenate the two buffers
const concatenatedBuffer = Buffer.concat([hello, world]);

// Convert the concatenated buffer to a string
const concatenatedString = concatenatedBuffer.toString();

console.log(concatenatedString); // Output: helloworld