import random, string
length = int(input("Enter password length: "))
if length < 4:
    print("Password length must be at least 4")
else:
    chars = string.ascii_letters + string.digits + string.punctuation
    password = [
        random.choice(string.ascii_lowercase),
        random.choice(string.ascii_uppercase),
        random.choice(string.digits),
        random.choice(string.punctuation),
    ]
    password += [random.choice(chars)
for _ in range(length - 4)]
    random.shuffle(password)
    print("Generated password:","".join(password))

 
