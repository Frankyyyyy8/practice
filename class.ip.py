''' CLASS deep diving
   (1) ENCAPSULATION 
   (2) INHERITANCE <
   (3) POLYMORHISM <
'''

print("===== INHERITANCE =====")
# PARENT > CHILD
# Parent only  provides only public & protected properties(state + method) to children!


class Animal:  # parent

    description = "The class is parent for animal"

    def __init__(self, voice):
        self._status = "amimal is alive "
        self.voice = voice

    def make_voice(self):
        print(f"the animal cand make voice: {self.voice}")


class Dog(Animal):  # child

    def __init__(self, name, sound, voice):
        self.name = name
        self.sound = sound
        super().__init__(voice)

    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def protect(self):
        print("Yes, I can protect you!")


class Cat(Animal):  # child
    # state

    # constructor
    def __init__(self, name, sound, voice):
        self.name = name
        self.sound = sound
        super().__init__(voice)

     # method
    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def play(self):
        pass


class Fish(Animal):  # child
    # state

    # constructor
    def __init__(self, name, sound, voice):
        self.name = name
        self.sound = sound
        super().__init__(voice)

     # method
    def introduce(self):
        print(f"{self.name} says: {self.sound}-{self.sound}")

    def swim(self):
        print("Yes, I can swim!")


dog = Dog("Rex", "wow", True)
cat = Cat("Tom", "myeow", True)
fish = Fish("Nemo", "ZzZ", False)

dog.introduce()
cat.introduce()

print("------")
dog.make_voice()
fish.make_voice()


print("-------")
print(Animal.description)
print(Dog.description)

print(dog.voice, fish.voice)
print("dog.status:", dog._status)
print("cat.status:", cat._status)
