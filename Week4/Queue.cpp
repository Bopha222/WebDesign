
#include <iostream>
using namespace std;

//Queue using Array 
/*class Node{
public:
    int data;
    Node*next;
    Node(int x){
        data=x;
        next=nullptr;
    }
};
class queue{
    private:
    int front,rear,capacity;
    int*arr;
    public:
    queue(int size){
        capacity=size;
        front=0;
        rear=-1;
        arr=new int[capacity];
    }
    void enqueue(int value){
        if (rear==capacity-1)
        {
            cout<<"Queue overflow!\n";
            return;
        }
        if (front==-1)
        {
            front=0;
        }
        rear=rear=1;
        
    }

};*/

//Queue using Linked List
class Node{
public:
    int data;
    Node*next;
    Node(int x){
        data=x;
        next=nullptr;
    }
};
class Queue{
    private:
    Node*front;
    Node*rear;  
    public:
    Queue(){
        front=nullptr;
        rear=nullptr;
    }
    void enqueue(int value){
        Node*newNode=new Node(value);
        if (rear==nullptr)
        {
            front=rear=newNode;
            return;
        }
        rear->next=newNode;
        rear=newNode;
    }
    void dequeue(){
        if (front==nullptr){
            cout<<"Queue underflow!\n";
            return;
        }
        Node*temp=front;
        front=front->next;
        delete temp;
        if (front==nullptr)
        {
            rear=nullptr;
        }
    }
    void display(){
        Node*temp=front;
        while (temp!=nullptr)
        {
            cout<<temp->data<<" ";
            temp=temp->next;
        }
        cout<<endl;
    }

};
int main(){
    Queue q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);
    q.display();
    q.dequeue();
    q.display();
    return 0;
}
