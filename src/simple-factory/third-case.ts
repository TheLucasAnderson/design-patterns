enum UserType {
  ADMIN = "admin",
  GUEST = "guest",
  MEMBER = "member",
}

enum Permission {
  READ = "read",
  WRITE = "write",
  DELETE = "delete",
}

interface User {
  id: string;
  type: UserType;
  permissions: Permission[];
  login: () => string;
}

const AdminUser = (id: string): User => ({
  id,
  type: UserType.ADMIN,
  permissions: [Permission.READ, Permission.WRITE, Permission.DELETE],
  login: () => `Admin ${id} logged in with full permissions.`,
});

const GuestUser = (id: string): User => ({
  id,
  type: UserType.GUEST,
  permissions: [Permission.READ],
  login: () => `Guest ${id} logged in with read-only permissions.`,
});

const MemberUser = (id: string): User => ({
  id,
  type: UserType.MEMBER,
  permissions: [Permission.READ, Permission.WRITE],
  login: () => `Member ${id} logged in with read and write permissions.`,
});

const UserFactory = {
  createUser: (type: UserType, id: string): User => {
    switch (type) {
      case UserType.ADMIN:
        return AdminUser(id);
      case UserType.GUEST:
        return GuestUser(id);
      case UserType.MEMBER:
        return MemberUser(id);
      default:
        throw new Error("Invalid user type");
    }
  },
};

const admin = UserFactory.createUser(UserType.ADMIN, "1");
console.log(admin.login()); // Admin 1 logged in with full permissions.

const guest = UserFactory.createUser(UserType.GUEST, "2");
console.log(guest.login()); // Guest 2 logged in with read-only permissions.

const member = UserFactory.createUser(UserType.MEMBER, "3");
console.log(member.login()); // Member 3 logged in with read and write permissions.
