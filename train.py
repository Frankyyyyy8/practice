'''
G-TASK (PYTHON)

 Shunday function tuzingki unga integerlardan iborat
array pass bolsin va function bizga osha arrayning eng
katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: get_highest_index([5, 21, 12, 21, 8]) return qiladi 1 sonini.
'''

# Masalani yechimi:


def get_highest_index(arr):
    if not arr:
        return -1

    max_value = arr[0]
    max_index = 0

    for i, a in enumerate(arr):
        if a > max_value:
            max_value = a
            max_index = i

    return max_index


result = get_highest_index([5, 21, 12, 21, 8])
print("result:", result)
