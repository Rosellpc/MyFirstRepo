"""
Hello World Module

This is a simple example module for MyFirstRepo.
It demonstrates basic Python code structure.
"""

def greet(name="World"):
    """
    Greet someone by name.
    
    Args:
        name (str): The name to greet. Defaults to "World".
    
    Returns:
        str: A greeting message.
    """
    return f"Hello, {name}!"


def main():
    """Main function to demonstrate the greet function."""
    print(greet())
    print(greet("GitHub"))
    print(greet("Contributors"))


if __name__ == "__main__":
    main()
