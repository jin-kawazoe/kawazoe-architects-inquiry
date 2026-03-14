import ftplib, os

host = '153.122.170.25'
user = 'effect'
pw = 'login0120$$$'
local_dir = r'C:\Users\jinka\inquiry\out'
remote_base = 'kawazoe-architects.com/inquiry'

def upload_dir(ftp, local, remote):
    try:
        ftp.mkd(remote)
    except Exception:
        pass
    for name in os.listdir(local):
        lpath = os.path.join(local, name)
        rpath = remote + '/' + name
        if os.path.isdir(lpath):
            upload_dir(ftp, lpath, rpath)
        else:
            with open(lpath, 'rb') as f:
                ftp.storbinary('STOR ' + rpath, f)
            print('  uploaded:', rpath)

try:
    ftp = ftplib.FTP()
    ftp.connect(host, 21, timeout=30)
    print('Connected:', ftp.getwelcome())
    ftp.login(user, pw)
    ftp.set_pasv(True)
    print('Login OK')
    upload_dir(ftp, local_dir, remote_base)
    ftp.quit()
    print('Deployment complete.')
except Exception as e:
    print('Error:', type(e).__name__, e)
