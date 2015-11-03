// scheme
// (define Ackermann
//   (lambda (m n)
//       (cond
//         ((zero? m)  n+1)
//         ((zero? n)  (Ackermann (sub1 m) 1))
//         (else       (Ackermann (sub1 m)
//                       (Ackermann m (sub1 n)))))))
// (define ack-curry
//   (lambda (m)
//     (lambda (n)
//       ((zero? m) (add1 n))
//       ((zero? n) ((ack-curry (sub1 m)) 1))
//       (else      ((ack-curry (sub1 m))
//                     ((ack-curry m) (sub1 n)))))))


function currymann(m) {
  return function(n) {
    if (m == 0)
      return n + 1;
    else if (n == 0)
      currymann(m - 1)(1);
    else
      currymann(m - 1)((currymann(m)(n-1)))
  }
}
