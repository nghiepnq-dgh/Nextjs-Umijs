export function setCookie(cname, cvalue) {
	try {
		if (typeof window !== 'undefined') {
			document.cookie = `${cname}=${encodeURIComponent(cvalue)};SameSite=None/`
		}
		return true
	} catch (err) {
		return false
	}
}
export function getCookie(cname) {
	try {
		if (typeof window !== 'undefined') {
			const name = `${cname}=`
			const decodedCookie = decodeURIComponent(document.cookie)
			const ca = decodedCookie.split(';')
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i]
				while (c.charAt(0) === ' ') {
					c = c.substring(1)
				}

				if (c.indexOf(name) === 0) {
					return JSON.parse(c.substring(name.length, c.length))
				}
			}
		}
	} catch (err) {
		console.log('[getCookie] Error', err)
	}
	return ''
}
