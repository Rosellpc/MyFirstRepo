"""
Example usage of the hello module.

This demonstrates how to use the greeting functions from the hello module.
"""

import sys
import os

# Add parent directory to path to import src module
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.hello import greet


def main():
    """Run example usage."""
    print("=== Hello Module Examples ===")
    print()
    
    # Example 1: Default greeting
    print("Example 1: Default greeting")
    print(greet())
    print()
    
    # Example 2: Custom greeting
    print("Example 2: Custom greeting")
    print(greet("MyFirstRepo"))
    print()
    
    # Example 3: Multiple greetings
    print("Example 3: Multiple greetings")
    names = ["Alice", "Bob", "Charlie"]
    for name in names:
        print(greet(name))


if __name__ == "__main__":
    main()
