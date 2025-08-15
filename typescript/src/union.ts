// type UnionType = Type1 | Type2 | Type3;

// Use Case 1: Flexible Function Arguments
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(formatValue("hello")); // HELLO
console.log(formatValue(42));      // 42.00
// console.log(formatValue(true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// Use Case 2: API Responses
type ErrorResponse = {
  error: true;
  message: string;
};

type SuccessResponse = {
  error: false;
  data: string;
};

type ApiResponse = ErrorResponse | SuccessResponse;

function handleResponse(response: ApiResponse) {
  if (response.error) {
    console.error(response.message);
  } else {
    console.log(response.data);
  }
}

