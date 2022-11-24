import { SetStorage, GetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements SetStorage, GetStorage {
	readonly LOCAL_STORAGE_KEYS = {
		AUTH: 'auth'
	}

	set(key: string, value?: object): void {
		if (value) {
			localStorage.setItem(key, JSON.stringify(value))
		} else {
			localStorage.removeItem(key)
		}
	}

	get(key: string): string | null {
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : null
	}
}
