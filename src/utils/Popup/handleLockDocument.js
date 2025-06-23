export function handleLockDocument(status) {
	status
		? document.querySelector('body').classList.add('_lockBody')
		: // document.querySelector('#footer').classList.add('_hideFooter')
		  document.querySelector('body').classList.remove('_lockBody')
		  // document.querySelector('#footer').classList.remove('_hideFooter')
}
