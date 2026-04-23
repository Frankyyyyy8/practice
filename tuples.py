''' Tuple
    (1) What is tuple: tuple vs list
    (2) Unpacking arguments
    (3) zip
'''

print("===== What is tuple: tuple vs list ===== ")
# Java/PHP/NodeJS array => Python list

# literal
numbs = [3, 5, 1, 2]
# car_disc = {"brand": "Ferrari", "year": 1995}
# print(numbs)

# constructor
letters = list("Hello World!")
# person_dict = dict(name="Martin", age=35)
# print(letters)

fruits = ["apple", "lemon", "banana", "kiwi"]
print("before fruits:", fruits)

fruits[2] = "melon"
print("after fruits:", fruits)

# we can not mutate tuple
animals = ("dog", "cat", "fish", "lion")
tuple_obj = ("MIT", 100, True, None)

print(animals[0])
# animals[0] = "bird"

# try avoid this
people = "Andrew", "John"
animals = "dog",

print("===== Unpacking arguments ===== ")
groups = ["MIT", "FLEXY", "DEVEX", "MG"]
# (x, y, z, a) = groups
(x, y, *z) = groups
print(f"the x: {x} and  y: {y}")
print("z:", z)  # list


#   *arg > tuple
def calculate(*args):
    print("*args >", args)
    total = 1
    for x in args:
        total *= x
    # print(f"the type(args) value: {type(args)}")
    print(f"the total value: {total}")
    return total


# CALL
calculate(1, 7, 2, 3)
calculate(0, 2, 300)
calculate(5, 7)

print("------")
#  **kwargs > via dictionary


def introduce(*args, **kwargs):
    print(f"the type(**kwargs) value: {type(kwargs)}")
    print(f"Hi, I am {kwargs["name"]} and I am {kwargs["age"]} years old!")
    pass


# Call
introduce(name="Justin", age=28)
introduce(name="Shawn", age=30, single=True)
