'''
M-TASK (PYTHON)

Shunday function yozing, u string qabul qilsin va string
palindrom yani togri oqilganda ham, orqasidan oqilganda 
ham bir hil oqiladigan soz ekanligini aniqlab boolean 
qiymat qaytarsin.
MASALAN: palindrom_check("dad") return True;  palindrom_check("son") return False;

'''

# Masalani yechimi:

def palindrom_check(s: str) -> bool:
    s = s.lower().replace(" ", "")
    return s == s[::-1]

print(palindrom_check("dad"))
print(palindrom_check("son"))
 

'''
K-TASK (PYTHON)  Shunday function yozing, u string
qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: find_longest("I come from Uzbekistan") return "Uzbekistan"
'''

# Masalani yechimi:


# def find_longest(text):
#     words = text.split()
#     longest = max(words, key=len)
#     return longest


# result = find_longest("I come from Uzbekistan")
# print("result:", result)

'''
I-TASK (PYTHON)

Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: get_digits("m14i1t") return qiladi "141"
'''

# # Masalani yechimi:


# def get_digits(str):
#     result = ""

#     for numb in str:
#         if numb.isdigit():
#             result += numb

#     return result


# result = get_digits("m14i1t")
# print("result:", result)

'''
G-TASK (PYTHON)

 Shunday function tuzingki unga integerlardan iborat
array pass bolsin va function bizga osha arrayning eng
katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: get_highest_index([5, 21, 12, 21, 8]) return qiladi 1 sonini.
'''

# Masalani yechimi:


# def get_highest_index(arr):
#     if not arr:
#         return -1

#     max_value = arr[0]
#     max_index = 0

#     for i, a in enumerate(arr):
#         if a > max_value:
#             max_value = a
#             max_index = i

#     return max_index


# result = get_highest_index([5, 21, 12, 21, 8])
# print("result:", result)
