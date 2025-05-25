export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

const USERS_KEY = 'tiap_users';
const CURRENT_USER_KEY = 'tiap_current_user';

function getUsers(): User[] {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? (JSON.parse(raw) as User[]) : [];
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

async function hash(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function register(name: string, email: string, password: string) {
  const users = getUsers();
  if (users.find((u) => u.email === email)) {
    throw new Error('User already exists');
  }
  const passwordHash = await hash(password);
  const user: User = {
    id: crypto.randomUUID(),
    name,
    email,
    passwordHash,
  };
  users.push(user);
  saveUsers(users);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export async function login(email: string, password: string) {
  const users = getUsers();
  const passwordHash = await hash(password);
  const user = users.find((u) => u.email === email && u.passwordHash === passwordHash);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser(): User | null {
  const raw = localStorage.getItem(CURRENT_USER_KEY);
  return raw ? (JSON.parse(raw) as User) : null;
}
