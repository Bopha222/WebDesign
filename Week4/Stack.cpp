#include <iostream>
using namespace std;
class Node{
public:
    int data;
    Node*next;
    Node(int x){
        data=x;
        next=nullptr;
    }
};
class Stack{
public:
    Node*top;
    int size;
    Stack(int size){
        top=nullptr;//constructor
        size=0;
    }

    void push(int x){
       Node*newnode=new Node(x);
       if(top==nullptr){
            top=newnode;
       }else{
           newnode->next=top;
           top=newnode;

       }
       size++;
    }
    int pop(){
        //can't remove when stack is empty
        if (top==nullptr){
            cout<<"Stack underflow!\n";
            return -1000000;
        }
        //can remove
        Node*t=top;
        int backupdata=t->data;

        top=top->next;
        delete t;//delete the old top
        size--;
        return backupdata;
    }
    void display(){
       if (top == nullptr) {
            cout << "Stack is empty.\n";
            return;
        }



        cout << "Stack elements (top to bottom): ";
        Node* t = top;
        while (t) {
            cout << t->data << " ";
            t = t->next;
        }
        cout << endl;
    }
    bool isEmpty(){
        return top==nullptr;
    }
    bool search(int n){//find n in the stack
        Node*t=top;
        while(t!=nullptr){
            if(t->data==n){
                return true;
            }
            t=t->next;
        }
        return false;
    }

};

int main(){
    Stack list(5);
    list.push(10);
    list.push(20);
    list.push(30);

    list.display();
    list.pop();
    cout<<"Top after pop is : "<<list.pop()<<endl;
    list.search(10)?cout<<10<<" Found\n":cout<<"Not Found\n";

}
