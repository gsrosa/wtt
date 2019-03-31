import { hash, compare } from 'bcrypt';

export class Crypto {
	public static async generateHash(text: String) {
		const saltRounds = 10;
		return new Promise<String>((resolve, reject) =>
			hash(text, saltRounds, (err, hash) =>
				err ? reject(err) : resolve(hash)
			)
		);
	}

	public static async compare(text: String, hash: String) {
		return new Promise<Boolean>((resolve, reject) =>
			compare(text, hash, (err, res) =>
				err ? reject(err) : resolve(res)
			)
		);
	}
}
