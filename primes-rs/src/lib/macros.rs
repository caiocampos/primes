#[macro_export]
macro_rules! is_factor {
    ($n:expr, 0) => (false);
    ($n:expr, 1) => (true);
    ($n:expr, 2) => (($n & 1) == 0);
    ($n:expr, [$($d:expr),* $(,)?]) => {
        $(is_factor!($n,$d) ||)* false
    };
    ($n:expr, &[$($d:expr),* $(,)?]) => {
        $(is_factor!($n,$d) ||)* false
    };
    ($n:expr, $d:expr) => {
        match $d {
            0 => is_factor!($n,0),
            1 => is_factor!($n,1),
            2 => is_factor!($n,2),
            d => $n % d == 0
        }
    }
}

#[macro_export]
macro_rules! iif {
    ($v:expr => $t:expr ; $f:expr) => {
        match $v {
            true => $t,
            _ => $f,
        }
    };
    (true => $t:expr ; $f:expr) => {
        $t
    };
    (false => $t:expr ; $f:expr) => {
        $f
    };
    ($($v:expr);+ $(;)?) => {
        $(
            if let Some(v) = $v {
                Some(v)
            } else
        )* {
            None
        }
    }
}
