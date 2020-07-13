## Server
https://zshttp.com/1310.htm

run the command in terminal "bash <(curl -s -L https://git.io/v2ray.sh)"

## Client
"/etc/v2ray/config.json"

```
{
  "log": {
    "loglevel": "warning"
  },
  "inbound": {
    "listen": "127.0.0.1",
    "port": 1080,
    "protocol": "socks",
    "settings": {
      "auth": "noauth",
      "udp": true,
      "ip": "127.0.0.1"
    }
  },
  "outbound": {
    "protocol": "vmess",
    "settings": {
      "vnext": [
        {
          "address": "18.162.50.159",
          "port": 57777,
          "users": [
            {
              "id": "ac231d92-7135-445a-9006-cd83a8e9ceb4",
              "level": 1,
              "alterId": 100
            }
          ]
        }
      ]
    },
    "mux": {
      "enabled": true,
      "concurrency": 8
    }
  }
}
```
