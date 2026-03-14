#include <bits/stdc++.h>
using namespace std;

int main() {
	int t; cin>>t;
	while(t--) {
		string ss; cin>>ss;
		map<char, int> mp;
		for (char a:ss) {
			mp[a]++;
		}
		int odds=0, n=ss.size();
		for (auto [x,y] : mp) {
			if (y%2 == 1) {
				odds++;
				ss[n/2] = x;
				mp[x]--;
			}
		}

		if (odds>1 || (odds==1&&n%2==0)) cout<<"impossible"<<endl;
		else {
			int b=0, e=ss.size()-1;
			for (auto[x,y] : mp) {
				while (y>0) {
					ss[b] = x;
					ss[e] = x;
					b++; e--;
					y-=2;
				}
			}
			cout<<ss<<endl;
		}
	}


	return 0;
}