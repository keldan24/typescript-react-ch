// Step 1: Define an interface for the props
interface GreetingProps {
  name: string;  // Define 'name' prop as a string
}

// Step 2: Define the functional component with explicit props typing
function Greeting({ name }: GreetingProps) {
  return <div>Hello, {name}!</div>;
}

export default Greeting;
