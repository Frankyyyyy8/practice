'''' OPERATOR & CONDITIONS
(1) Operators
(2) Condition
(3) Logical Operators
'''

print("===== Operators =====")
# + - > >= < <=  == * is /     // % += **

a = 19
b = 5

# print("a > b", a > b)
# print("a * b", a * b)
# print("a / b", a / b)

print("a / b", a / b)
result = a // b
left = a % b
print(f"the result: {result} and left: {left}")

# a = a + 100
a += 100
print("a:", a)

print("b**2:", b**2)
print("b**3:", b**3)


print("="*5)

c = dict(name="Martin", age=35)
d = dict(name="Martin", age=35)
e = c

print("c==d", c == d)  # only value
print(id(c), id(d))

# data = c is d
# print("c is d", data)
# print("c is e", data)


print("c is d", c is d)
print("c is e", c is e)


print("===== Conditions =====")
x = 5

if x > 50:
    print("Case C")
elif x > 10:
    print("Case B")
else:
    print("Case C")


print("===== Logical Operators =====")
age = 21
# person = None

# if age > 16:
#     person = "adult"
# else:
#     person = "child"

# print("person:", person)

# Ternary

person = "adult" if age > 18 else "minor"
print("person:", person)

is_student = True
is_admin = False
is_guest = True
# is_parent = True
is_parent = False


# if not is_student:
#     print("Welcome here, do you want ot be student!")
# elif is_admin:
#     print("Please go to this office!")
# elif is_guest or is_parent: #  (or) bitta true bolsa boldi
#     print("Waiting room is over there!")

if not is_student:
    print("Welcome here, do you want ot be student!")
elif is_admin:
    print("Please go to this office!")
elif is_guest and is_parent:
    print("Waiting room is over there!")
else:
    print("Etc")
