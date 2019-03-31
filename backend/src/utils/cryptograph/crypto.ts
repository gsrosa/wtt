import { hash, compare } from 'bcrypt';

export abstract class Crypto {
	private saltRounds = 10;

	public async generateHash(text: String) {
		return new Promise<String>((resolve, reject) =>
			hash(text, this.saltRounds, (err, hash) =>
				err ? reject(err) : resolve(hash)
			)
		);
	}

	public async compare(text: String, hash: String) {
		return new Promise<Boolean>((resolve, reject) =>
			compare(text, hash, (err, res) =>
				err ? reject(err) : resolve(res)
			)
		);
	}
}
